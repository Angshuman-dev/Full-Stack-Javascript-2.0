let score = 22

console.log(score)
switch (true) {
    case (80 >= score <= 100):
        {
            console.log('a');

            break;
        }
    case (70 >= score <= 89):
        {
            console.log('b');

            break;
        }
    case (60 >= score <= 69):
        {
            console.log('c');

            break;
        }
    case (50 >= score <= 59):
        console.log('d');

        break;
    case (0 >= score <= 49):
        {
            console.log('f')

            break;
        }
    default:
        {
            console.log('error')
            break;
        }
}