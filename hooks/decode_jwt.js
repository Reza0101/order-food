import jwt_decode from 'jwt-decode';

export const decodeJWT = (token) => {
    const {email, role} = jwt_decode(token)
    return {email, role}
}