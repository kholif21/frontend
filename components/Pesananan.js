import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';

const initFormValues = {
    namaLengkap: '',
    email: '',
    jenisKelamin: 'L',
    agama: 'Islam',
    alamat: '',
    MerkTV : [],
};

const handleOnSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }, 400);
};

const skemaValidasi = Yup.object({
    namaLengkap: Yup.string().required('Nama lengkap harus diisi'),
    email: Yup.string()
        .email('Format email salah')
        .required('Email harus diisi'),
    alamat: Yup.string().required('Alamat tidak boleh dikosongi'),
    MerkTV: Yup.array().min(
        1,
        ({ min }) => `Minimal ${min} Televisi harus dipilih`
    ),
});

// Custom component untuk pesan error
const PesanError = (props) => (
    <div className='form-text text-danger'>{props.children}</div>
);
    
const MainForm = () => (
    <div className="container py-5">
        <Formik
            initialValues={initFormValues}
            onSubmit={handleOnSubmit}
            validationSchema={skemaValidasi}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className='row mb-3'>
                        <label
                            htmlFor='namaLengkap'
                            className='col-md-2 col-form-label'
                        >
                            Nama lengkap
                        </label>
                        <div className='col-md-10'>
                            <Field
                                type='text'
                                name='namaLengkap'
                                className='form-control'
                            />
                            <ErrorMessage
                                name='namaLengkap'
                                component={PesanError}
                            />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='email' className='col-md-2 col-formlabel'>
                            Email
                        </label>
                        <div className='col-md-10'>
                            <Field
                                type='email'
                                name='email'
                                className='form-control'
                                placeholder='example@domain.bla'
                            />
                            <ErrorMessage name='email' component={PesanError} />
                        </div>
                    </div>

                    <fieldset className='row mb-3'>
                        <legend className='col-form-label col-md-2 pt-0'>
                            Jenis kelamin
                        </legend>
                        <div className='col-md-10'>
                            <div className='form-check'>
                                <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='jenisKelamin'
                                    value='L'
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='jenisKelamin'
                                >
                                    Pria
                                </label>
                            </div>
                            <div className='form-check'>
                                <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='jenisKelamin'
                                    value='P'
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='jenisKelamin'
                                >
                                    Wanita
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <div className='row mb-3'>
                        <label htmlFor='agama' className='col-md-2 col-formlabel'>
                            Agama
                        </label>
                        <div className='col-md-10'>
                            <Field
                                as='select'
                                name='agama'
                                className='form-control'
                            >
                                <option>Islam</option>
                                <option>Katolik</option>
                                <option>Protestan</option>
                                <option>Hindu</option>
                                <option>Buddha</option>
                                <option>Konghucu</option>
                            </Field>
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='alamat' className='col-md-2 col-formlabel'>
                            Alamat
                        </label>
                        <div className='col-md-10'>
                            <Field
                            name='alamat'
                            as='textarea'
                            className='form-control'
                            />
                            <ErrorMessage name='alamat' component={PesanError} />
                        </div>
                    </div>

                    <fieldset className='row mb-3'>
                        <legend className='col-form-label col-md-2 pt-0'>
                            Televisi
                        </legend>
                        <div className='col-md-10'>
                            <div className='form-check'>
                                <Field
                                    className='form-check-input'
                                    type='checkbox'
                                    name='MerkTV'
                                    value="Samsung LED Curved TV 49'"
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='MerkTV'
                                >
                                    Samsung LED Curved TV 49'
                                </label>
                            </div>

                            <div className='form-check'>
                                <Field
                                    className='form-check-input'
                                    type='checkbox'
                                    name='MerkTV'
                                    value="Sony LED TV 32'"
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='MerkTV'
                                >
                                    Sony LED TV 32'
                                </label>
                            </div>

                            <div className='form-check'>
                                <Field
                                    className='form-check-input'
                                    type='checkbox'
                                    name='MerkTV'
                                    value="LG LED TV 55'"
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='MerkTV'
                                >
                                    LG LED TV 55'
                                </label>
                            </div>
                            <ErrorMessage
                                name='MerkTV'
                                component={PesanError}
                            />
                        </div>
                    </fieldset>

                    <div className='row'>
                        <div className='col-md-10 offset-md-2'>
                            <button
                                type='submit'
                                className='btn btn-primary me-3'
                                disabled={isSubmitting}
                            >
                                Kirim
                            </button>
                            <button
                                type='reset'
                                className='btn btn-outline-secondary'
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);

export default MainForm