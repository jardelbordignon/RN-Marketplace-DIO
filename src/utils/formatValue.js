//import Intl from 'intl'

const formatValue = (value) => 
  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
    .format(value).replace(/^(\D+)/, '$1 ')

export default formatValue