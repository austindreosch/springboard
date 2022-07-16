def in_range(nums, lowest, highest):
    for num in nums:
        if num >= lowest and num <= highest:
            print(f"{num} works!")

        # range(start, stop)


in_range([10, 20, 30, 40, 50], 15, 30)
