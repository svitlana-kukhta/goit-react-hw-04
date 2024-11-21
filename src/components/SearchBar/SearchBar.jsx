import { Field, Form, Formik } from 'formik';
import css from "./SearchBar.module.css";
const SearchBar = ({ onChangeQuery }) => {
  const initialValues = { query: '' };

  const handleSubmit = values => {
    console.log(values);
    onChangeQuery(values.query)
   };

  return (
    <div className={css.searchBarContainer}>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    <header>
          <Form className={css.searchForm}>
             <Field name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={css.searchInput}
             />
            <button type="submit" className={css.searchButton }>Search</button>
          </Form>
      </header>
      </Formik>  
    </div>
  )
}

export default SearchBar



