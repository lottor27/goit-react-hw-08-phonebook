import css from 'components/Sections/sections.module.css';


const Section = ({ title, children }) => {
  return (
    <div className={css.background}>
      <h2 className={css.title}>
        <p>Here</p>
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Section;
