const yup = require('yup')

exports.ambulancesSchema = yup.object().shape({
    email: yup.string().required('Email é obrigatório.'),
    password: yup.string().required('A senha é obrigatória.'),
    driverName: yup.string().required('O nome do motorista é obrigatório'),
    driverCPF: yup.string().min(11).required('O número do CPF é obrigatório.'),
    licensePlate: yup.string().required('O número da placa da ambulância é obritaório.'),
    telephoneNumberAmbulance: yup.string().min(11).required("Seu número de telefone com o DDD é obrigatório."),
    ambulanceId: yup.string().required('O id do usuário é obrigatório.')
}).required('O formulário não pode ser vazio.')