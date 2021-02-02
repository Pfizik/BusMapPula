const getBus = async getText => {
    const get = await fetch('bustabla.json');
    const getbuses = await get.json();

    let list = getbuses.filter();

    console.log(getbuses);
};