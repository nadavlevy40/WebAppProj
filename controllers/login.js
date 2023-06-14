function login(req, res) {
    console.log("login request...");
    const { username, password } = req.body
    let user = findUser(username, password);
    if (user) {
        console.log("logged in!");
        req.session.username = username;
        res.redirect('/');
    }
    else {
        console.log("incorrect!")
        res.redirect('/login?error=1')
    }
}

function logout(req, res) {
    req.session.username = undefined;
    res.redirect('/');
}

function getLoggedUser(req, res) {
    let user = undefined;
    if(req.session) {
        user =req.session.username;
    }
    res.send(user);
}

function findUser(username, password) {
    // TODO: This is a stub. replace with user search in DB
    return (username === 'amit' && password === '123');
}

module.exports = {
    login,
    logout,
    getLoggedUser
}