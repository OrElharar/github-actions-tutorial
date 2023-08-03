import HelpBox from './HelpBox/HelpBox.jsx';
import './HelpArea.css';
import {array} from "prop-types";

function HelpArea({helpItems}) {
  return (
    <section data-testid="help-area" id="help-area">
      {helpItems.map((item) => (
        <HelpBox key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
}

HelpArea.propTypes = {
    helpItems: array
};

export default HelpArea;
