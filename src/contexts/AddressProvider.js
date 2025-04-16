import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { removeAddressService } from "../services/address-services/removeAddressService.js";
import { useAuth } from "./AuthProvider.js";
import { useUserData } from "./UserDataProvider.js";

const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [, setLoading] = useState(false);
  const [, setError] = useState("false");
  const { dispatch } = useUserData();
  const [addressForm, setAddressForm] = useState({
    _id: "",
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phone: "",
  });
  const { auth } = useAuth();

  const [editAddressIndex, setEditAddressIndex] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const deleteAddress = async (address) => {
    try {
      setLoading(true);
      setError("");
      const response = await removeAddressService(address, auth.token);
      if (response.status === 200) {
        setLoading(false);
        toast.success(`${address.name}'s address deleted successfully!`);
        dispatch({ type: "SET_ADDRESS", payload: response.data.addressList });
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        editAddressIndex,
        setEditAddressIndex,
        addressForm,
        setAddressForm,
        isAddressModalOpen,
        setIsAddressModalOpen,
        isEdit,
        setIsEdit,
        deleteAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export const useAddress = () => useContext(AddressContext);
