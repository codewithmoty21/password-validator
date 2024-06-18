import React, { useState } from 'react';
import './PasswordValidator.css';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const validatePassword = (password) => {
    const validations = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    setValidations(validations);
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-validator">
      <h2>Password Validator</h2>
      <div className="input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <button type="button" onClick={toggleShowPassword} className="toggle-button">
          <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
        </button>
      </div>
      <ul>
        <li className={validations.length ? 'valid' : 'invalid'}>At least 8 characters</li>
        <li className={validations.uppercase ? 'valid' : 'invalid'}>At least one uppercase letter</li>
        <li className={validations.lowercase ? 'valid' : 'invalid'}>At least one lowercase letter</li>
        <li className={validations.number ? 'valid' : 'invalid'}>At least one number</li>
        <li className={validations.specialChar ? 'valid' : 'invalid'}>At least one special character</li>
      </ul>
    </div>
  );
};

export default PasswordValidator;
