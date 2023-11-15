Feature: Ticket booking test
    Scenario: Book an affordable ticket
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user selects day
        When user selects session time
        When user selects one free space
        When user reserves the selected seat
        Then user receives an electronic ticket "Вы выбрали билеты:"

    Scenario: Book three free tickets
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user selects day
        When user selects session time
        When user selects one free space
        When user selects second free space
        When user selects third free space
        When user reserves the selected seat
        When user receives a booking code
        Then user receives an electronic ticket "Электронный билет"

            Scenario: Book a ticket for the purchased seat
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user selects day
        When user selects session time
        When user selects one free space
        When user reserves the selected seat
        Then button for booking is inactive "true"