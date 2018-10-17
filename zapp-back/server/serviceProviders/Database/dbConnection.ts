import { connect } from 'mongoose';
export const connection = connect('mongodb://mongo/zappy', { useNewUrlParser: true });