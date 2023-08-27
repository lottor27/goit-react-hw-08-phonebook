

const SavedContact = ({ id, name, number }) => {
  return (
    <li  key={name}>
      <p >

        {name}: {number}
      </p>
      <button type="button" data-id={id}>
        Delete
      </button>
    </li>
  );
};

export default SavedContact;
