class BoggleGame {
    constructor(boardID, seconds = 60) {
        this.seconds = seconds
        this.showTimer()

        this.score = 0;
        this.words = new Set()
        this.board = $('#' + boardID)

        this.timer = setInterval(this.tick.bind(this), 1000);
        $('.add-word', this.board).on('submit', this.handleSubmit.bind(this))
    }


    showTimer() {
        $(".timer", this.board).text(this.seconds)
    }

    handleSubmit(event) {
        event.preventDefault();
        const $word = $(".wordinput", this.board);

        let word = $word.val(); //word input value
        if (!word) return //exit if no input

        if (this.words.has(word)) {
            this.showMessage(`Already found ${word}`, "err")
            return;
        }

        const response = await axios.get("/check-word", { params: { word: word } });
        if (response.data.result === "not-word") {
            this.showMessage(`${word} is not a valid English word.`, "err")
        }
        else if (response.data.result === "not-on-board") {
            this.showMessage(`${word} is not a valid word on this board`, 'err');
        }
        else {
            this.showWord(word);
            this.score += word.length;
            this.showScore();
            this.words.add(word);
            this.showMessage(`Added: ${word}`, "ok");
        }
        $word.val("").focus();
    }

    async tick() {
        this.seconds -= 1;
        this.showTimer();

        if (this.seconds === 0) {
            clearInterval(this.timer);
            await this.scoreGame();
        }
    }


    showWord(word) {
        $(".words", this.board).append($("<li>", { text: word }));
    }

    showScore() {
        $(".score", this.board).text(this.score);
    }

    showMessage(msg, cls) {
        $(".msg", this.board)
            .text(msg)
            .removeClass()
            .addClass(`msg ${cls}`)
    }

    async scoreGame() {
        $(".post-word", this.board).hide();
        let response = await axios.get("/post-score", { score: this.score });

        if (response.data.brokeRecord) {
            this.showMessage(`New Record! - ${this.score}`, 'ok');
        }
        else {
            this.showMessage(`Final Score - ${this.score}`, 'ok')
        }

    }













}