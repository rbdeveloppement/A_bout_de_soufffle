import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ÿ'-]+$/,
      "Seuls des caractères alphabétiques sont autorisés"
    )
    .required("Prénom obligatoire")
    .max(50, "50 caractères maximum pour le prénom"),
  last_name: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ÿ'-]+$/,
      "Seuls des caractères alphabétiques sont autorisés"
    )
    .required("Nom obligatoire")
    .max(50, "50 caractères maximum le patronyme"),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
      "Entrez une adresse email valide"
    )
    .required("Courriel obligatoire")
    .email("Veuillez saisir une adresse e-mail valide"),
  password: Yup.string()
    .required("Mot de passe obligatoire")
    .min(8, "Il faut au minimum 8 caractères"),
  control_password: Yup.string()
    .required("Mot de passe obligatoire")
    .min(8, "Il faut au minimum 8 caractères"),
});

export const validationSchemaLogin = Yup.object().shape({
  username: Yup.string()
    .required("Adresse e-mail obligatoire")
    .matches(
      /^\w+([.-]?\w+)*@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
      "Entrez une adresse email valide"
    )
    .email("Saisissez une adresse e-mail valide"),
  password: Yup.string()
    .required("Mot de passe obligatoire")
    .min(8, "Le mot de passe doit contenir au minimum 8 caractères"),
});

export const validationSchemaUser = Yup.object().shape({
  first_name: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ÿ'-]+$/,
      "Seuls des caractères alphabétiques sont autorisés"
    )
    .required("Prénom obligatoire")
    .max(50, "50 caractères maximum pour le prénom"),
  last_name: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ÿ'-]+$/,
      "Seuls des caractères alphabétiques sont autorisés"
    )
    .required("Nom obligatoire")
    .max(50, "50 caractères maximum le patronyme"),

  // Ce Regex correspond au RFC 2822 de l'IETF :
  // https://www.ietf.org/rfc/rfc2822.txt
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
      "Entrez une adresse email valide"
    )
    .required("Courriel obligatoire")
    .email("Veuillez saisir une adresse e-mail valide"),

  // Ce Regex fonctionne avec ou sans l'indicatif pour la France
  phone: Yup.string().matches(
    /^(?:0|\+33 ?|0?0?33 ?|)(0[1-9] ?(?:[0-9] ?){8})$/,
    "Format de numéro téléphonique invalide"
  ),
});

export const validationSchemaAddress = Yup.object().shape({
  name: Yup.string()
    .required("Nom obligatoire")
    .max(50, "50 caractères maximum pour le nom"),
  address: Yup.string()
    .required("Addresse obligatoire")
    .max(80, "80 caractères maximum pour l'addresse"),
  country: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ÿ'-]+$/,
      "Seuls des caractères alphabétiques sont autorisés"
    )
    .required("Pays obligatoire")
    .max(30, "30 caractères maximum pour le pays"),
  city: Yup.string()
    .required("Ville obligatoire")
    .max(80, "80 caractères maximum pour la ville"),
  postal: Yup.number().required("Code postal obligatoire"),
});
