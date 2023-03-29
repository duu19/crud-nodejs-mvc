const usuarios = [
    {
        nome: "João",
        id: 1,
        email: "user1@hotmail.com",
        senha: "111"
    },
    {
        nome: "Roberto",
        id: 2,
        email: "user2@hotmail.com",
        senha: "222"
    },
    {
        nome: "Barbara",
        id: 3,
        email: "user3@hotmail.com",
        senha: "333"
    },
]

const find = (req, res) => {
    const id = req.params.id;
    let found = false;

    usuarios.map(function(valor){
        if(valor.id == id){
            found = true;
            return res.send(valor);
        }
    });

    if(!found){
        res.status(404).send({message: "não foi encontrado"});
    }
}

const findAllUsers = (req, res) => {
    res.send(usuarios);
}

const createUser = (req, res) => {
    const usuario = req.body;

    if(Object.keys(usuario).length === 0) {
        return res.status(400).send({message: "os campos estão vazios!"});
    }

    if(!usuario.id){
        return res.status(400).send({message: "o ID não foi encontrado!"})
    }

    if(!usuario.nome){
        return res.status(400).send({message: "o nome não foi encontrado!"})
    }

    if(!usuario.email){
        return res.status(400).send({message: "o e-mail não foi encontrado!"})
    }

    if(!usuario.senha){
        return res.status(400).send({message: "o campo senha não foi preenchido!"})
    }

    usuario.nacionalidade = "brasileiro";
    usuarios.push(usuario);
    res.status(201).send(usuarios);
}

const updateUser = (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    let found = false;

    if(Object.keys(usuario).length === 0) {
        return res.status(400).send({message: "está vazio!"});
    }

    if(!usuario.id){
        return res.status(400).send({message: "o ID não foi encontrado!"})
    }

    if(!usuario.nome){
        return res.status(400).send({message: "o nome não foi encontrado!"})
    }

    if(!usuario.email){
        return res.status(400).send({message: "o e-mail não foi encontrado!"})
    }

    usuarios.map(function(valor, index){
        if(valor.id == id){
            found = true;
            usuarios[index] = usuario;
            return res.send(usuarios[index]);
        }
    });

    if(!found){
        res.status(404).send({message: "não foi encontrado"});
    }
}


const deleteUser = (req, res) => {
    const id = req.params.id;
    let found = false;

    usuarios.map(function(valor, index){
        if(valor.id == id){
            found = true;
            usuarios.splice(index, 1);
            return res.send(valor);
        }
    });

    if(!found){
        res.status(404).send({message: "não foi encontrado"});
    }
}

module.exports = {
    find,
    findAllUsers,
    createUser,
    updateUser,
    deleteUser
};