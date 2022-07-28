from calendar import c


def find_greater_numbers(nums):
    """Return # of times a number is followed by a greater number.

    For example, for [1, 2, 3], the answer is 3:
    - the 1 is followed by the 2 *and* the 3
    - the 2 is followed by the 3

    Examples:

        >>> find_greater_numbers([1, 2, 3])
        3

        >>> find_greater_numbers([6, 1, 2, 7])
        4

        >>> find_greater_numbers([5, 4, 3, 2, 1])
        0

        >>> find_greater_numbers([])
        0
    """
    # firstCheck = False
    # checker = None
    # counter = 1

    # for num in nums:
    #     if firstCheck == True:
    #         if num > checker:
    #             counter += 1
    #             checker = num

    #     if firstCheck == False:
    #         firstCheck = True
    #         checker = num

    # return counter

    counter = 0

    for num in range(len(nums)):
        for val in range(num + 1, len(nums)):
            if nums[val] > nums[num]:
                counter += 1

    return counter
