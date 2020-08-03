import moment from 'moment'

export default ({ timestamp }) => moment(timestamp).format('MMMM YYYY')