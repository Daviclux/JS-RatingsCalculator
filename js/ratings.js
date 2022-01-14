function collect_ratings(){
    const ratings = {
        count = 0,
        sum = 0,
        average = 0,

        'count': 0,
        'sum': 0,
        'average': 0,

    };

    let rating = 0;

    elements = document.querySelectorAll('.rating');
    elements.forEach(element => {
        rating = parseInt(element.id.replace('star', ''));
        ratings.count += parseInt(element.value);
        ratings.sum += parseInt(element.value) * rating;   
    });

    if(ratings.count ! == 0){
        ratings.average = ratings.sum / ratings.count;
    };
    return ratings;
}

const ratings = document.addEventListener('change', (collect_ratings) => {
    const ratings = collect_ratings();
    document.querySelectorAll('#average').value = ratings.average.toFixe(2);

});
