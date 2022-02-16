import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
