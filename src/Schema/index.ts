import * as Yup from 'yup';
import { checkExpiredDate, checkValidDate } from '../utils/date';
import { toast } from 'react-toastify';

export const baseShema = Yup.object().shape({
    firstName: Yup.string().required('Campo obrigatório'),
    lastName: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    // Usar máscara de input
    // phone: Yup.number()
    //     .typeError('Deve conter apenas números')
    //     .min(10, 'Mínimo 10 caracteres')
    //     .max(11, 'Máximo 11 caracteres')
    //     .required('Campo obrigatório'),

    // Usar máscara de input
    // cpf_cnpj: Yup.number()
    //     .typeError('Deve conter apenas números')
    //     .min(11, 'Mínimo 11 caracteres')
    //     .max(14, 'Máximo 14 caracteres')
    //     .required('Campo Obrigatório'),

    // Usar máscara de input 99999-999
    cep: Yup.string()
        .test(
            'cep',
            'Deve conter 9 dígitos, incluindo hífen',
            val => String(val)?.length === 9
        )
        .required('Campo obrigatório'),
    street: Yup.string().required('Campo obrigatório'),
    number: Yup.string().required('Campo obrigatório'),
    neighborhood: Yup.string().required('Campo obrigatório'),
    city: Yup.string().required('Campo obrigatório'),
    state: Yup.string().required('Campo obrigatório'),
    shouldFail: Yup.boolean(),
    notify: Yup.string().when('shouldFail', {
        is: true,
        then: Yup.string(),
    }),
    paymentType: Yup.string(),
    ownerCard: Yup.string().when('paymentType', {
        is: 'credit',
        then: Yup.string().required('Campo obrigatório'),
    }),
    numberCard: Yup.string().when('paymentType', {
        is: 'credit',
        then: Yup.string()
            .test(
                'numberCard',
                'Deve conter 16 dígitos',
                val => String(val)?.length === 19
            )
            .required('Campo obrigatório'),
    }),
    // Usar máscara de data 99/99
    validity: Yup.string().when('paymentType', {
        is: 'credit',
        then: Yup.string()
            .required('Campo obrigatório')
            .test(
                'validity',
                'Deve conter o mês e ano no formato MM/AA',
                val => String(val)?.length === 5
            )
            .test('valid', 'Data inválida', checkValidDate)
            .test('expired', 'Cartão expirado', checkExpiredDate),
    }),

    securityCode: Yup.string().when('paymentType', {
        is: 'credit',
        then: Yup.string()
            .test(
                'securityCode',
                'Deve conter 3 dígitos',
                val => String(val)?.length === 3
            )
            .required('Campo obrigatório'),
    }),
});

export const checkoutFormInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cpf_cnpj: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    ownerCard: '',
    numberCard: '',
    validity: '',
    securityCode: '',
    paymentType: 'credit',
    shouldFail: false,
    notify: () => toast('Pagamento não aprovado!'),
};
