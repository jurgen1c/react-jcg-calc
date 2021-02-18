import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Button({ name, onClick }) {
  const ButtonText = styled.button`
    width: ${props => (props.name === '0' ? '50%' : '25%')};
    height: 100px;
    background-color: ${props => (props.name === '-' || props.name === 'X' || props.name === '+' || props.name === '=' || props.name === '÷' ? 'orange' : 'lightgray')};
  `;
  return (
    <ButtonText type="button" name={name} className={(name === '0' ? 'o-btn' : 'btn')} onClick={() => { onClick(name); }}>
      {name}
    </ButtonText>
  );
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
