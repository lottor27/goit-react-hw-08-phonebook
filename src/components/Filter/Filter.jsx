
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/reducers/filterSlice';
import { selectContacts } from '../../redux/selectors';

const SearchContact = ({ searchTitle }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSearchInput = e => {
    console.log(e.target.value);
    dispatch(updateFilter(e.target.value.trim()));
  };

  return (
    contacts.length > 0 && (
      <div>
        <h3 className={css.textfilter}>Find Find contacts by name</h3>
        <h3>{searchTitle}</h3>
        <input
          className={css.inputfilter}
          type="text"
          onInput={handleSearchInput}
        />
      </div>
    )
  );
};

export default SearchContact;