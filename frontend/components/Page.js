import PropTypes from 'prop-types';
import Header from './Header';

const Page = ({ children, cool }) => (
  <div>
    <Header />
    <h2>Page component</h2>
    <h3>{cool}</h3>
    {children}
  </div>
);

export default Page;

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
