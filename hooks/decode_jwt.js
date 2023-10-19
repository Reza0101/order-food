import jwt_decode from 'jwt-decode';

export const decodeJWT = ({token}) => {
    return jwt_decode(token);
}