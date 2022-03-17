const testController = (req, res, next) => {
    try {
        console.log('TEST CONTROLLER');
        res.render('index', { title:'Netflix Clones', email:'' });
    } catch (error) {
        console.log(error);
        res.status(500).send('TEST ERROR');
    }

};

export {
    testController
}