import React, { useEffect, useState } from "react";
import SubTitle from "../SubTitle/SubTitle";

const CheckoutForm = ({ onConfirm }) => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    const isFomValid =
      user.name && user.phone && user.email && user.email === user.confirmEmail;
    setIsValid(isFomValid);
  }, [user]);
  const handleConfirm = (event) => {
    event.preventDefault();
    if (user.email === user.confirmEmail) {
      const userData = {
        name: user.name,
        phone: user.phone,
        email: user.email,
      };
      onConfirm(userData);
    } else {
      setErrors({ confirmEmail: "Los email no coinciden" });
    }
  };

  console.log("isValid:", isValid);
  return (
    <div className="checkout">
      <SubTitle text={"Datos para orden de compra"} />
      <form onSubmit={handleConfirm}>
        <div className="mb-3">
          <label className="form-label">Nombre y Apellido</label>
          <input
            onChange={handleChange}
            required
            type="text"
            className="form-control"
            name="name"
            placeholder="Evelina Niemann"
            value={user.name}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            onChange={handleChange}
            required
            type="number"
            className="form-control"
            name="phone"
            placeholder="11-1111-1111"
            value={user.phone}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={handleChange}
            required
            type="email"
            className="form-control"
            name="email"
            placeholder="name@example.com"
            value={user.email}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Confirmar email</label>
          <input
            onChange={handleChange}
            required
            type="email"
            className="form-control"
            name="confirmEmail"
            placeholder="name@example.com"
            value={user.confirmEmail}
          />
          {errors.confirmEmail && (
            <div className="error">{errors.confirmEmail}</div>
          )}
        </div>

        <button className="fill" type="submit" disabled={!isValid}>
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
