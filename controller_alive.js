const keepAlive = async (req, res) => {
    const resp = {
        "placeholder": "yes its alive",
    }

    res.status(201).json(resp);
}

module.exports = {
    keepAlive
}