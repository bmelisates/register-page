import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const initialValues = {
  ad: "",
  soyad: "",
  email: "",
  password: "",
};

export const errorMessages = {
  ad: "Adınız en az 3 karakter olmalı",
  soyad: "Soyadınız en az 3 karakter olmalı",
  email: "Geçerli bir email adresi giriniz",
  password:
    "En az 8 karakter, en az 1 büyük harf, küçük harf, sembol ve rakam içermelidir.",
};

export default function Register() {
  const [formData, setFormData] = useState(initialValues);

  const [errors, setErrors] = useState({
    ad: false,
    soyad: false,
    email: false,
    password: false,
  });

  const [isValid, setIsValid] = useState(false);
  const [id, setId] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    if (
      formData.ad.trim().length >= 3 &&
      formData.soyad.trim().length >= 3 &&
      validateEmail(formData.email) &&
      regex.test(formData.password)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name == "ad" || name == "soyad") {
      if (value.trim().length > 3) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name == "password") {
      if (regex.test(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name == "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        setFormData(initialValues);
        setId(response.data.id);
      })
      .catch((error) => console.warn(error));
  };

  return (
    <Card>
      <CardHeader className="fw-bold">Kayıt Formu</CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="ad">Adınız:</Label>
            <Input
              id="ad"
              name="ad"
              placeholder="Adınızı giriniz"
              type="text"
              onChange={handleChange}
              value={formData.ad}
              invalid={errors.ad}
              data-cy="ad-input"
            />
            {errors.ad && (
              <FormFeedback data-cy="error-message">
                {errorMessages.ad}
              </FormFeedback>
            )}
          </FormGroup>

          <FormGroup>
            <Label for="soyad">Soyadınız:</Label>
            <Input
              id="soyad"
              name="soyad"
              placeholder="Soyadınızı giriniz"
              type="text"
              onChange={handleChange}
              value={formData.soyad}
              invalid={errors.soyad}
              data-cy="soyad-input"
            />
            {errors.soyad && (
              <FormFeedback data-cy="error-message">
                {errorMessages.soyad}
              </FormFeedback>
            )}
          </FormGroup>

          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              id="email"
              name="email"
              placeholder="Email adresinizi giriniz"
              type="email"
              onChange={handleChange}
              value={formData.email}
              invalid={errors.email}
              data-cy="email-input"
            />
            {errors.email && (
              <FormFeedback data-cy="error-message">
                {errorMessages.email}
              </FormFeedback>
            )}
          </FormGroup>

          <FormGroup>
            <Label for="password">Şifre</Label>
            <Input
              id="password"
              name="password"
              placeholder="Güçlü bir şifre belirleyin"
              type="password"
              onChange={handleChange}
              value={formData.password}
              invalid={errors.password}
              data-cy="password-input"
            />
            {errors.password && (
              <FormFeedback data-cy="error-message">
                {errorMessages.password}
              </FormFeedback>
            )}
          </FormGroup>

          <Button data-cy="submit-button" disabled={!isValid}>
            Kayıt Ol
          </Button>
        </Form>
      </CardBody>
      <CardFooter>ID: {id}</CardFooter>
    </Card>
  );
}

//yorum
