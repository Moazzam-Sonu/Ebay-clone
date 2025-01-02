import TextInput from "../components/TextInput";
import Mainlayout from "../layout/Mainlayout";

export default function page() {
  return (
    <>
    <Mainlayout>
        <div 
            id="AddressPage" 
            className="mt-4 max-w-[600px] mx-auto px-2"
        >
            <div className="mx-auto bg-white rounded-lg p-3">

                <div className="text-xl text-bold mb-2">Address Details</div>

                <form >
                    <div className="mb-4">
                       
                            <TextInput 
                                className="w-full"
                                // string={name}
                                // placeholder="Name"
                                // onUpdate={setName}
                                // error={showError('name')}
                            />
                       
                    </div>

                    <div className="mb-4">
                       
                            <TextInput 
                                className="w-full"
                                // string={address}
                                // placeholder="Address"
                                // onUpdate={setAddress}
                                // error={showError('address')}
                            />
                        
                    </div>

                    <div className="mb-4">
                       
                            <TextInput 
                                className="w-full mt-2"
                                // string={zipcode}
                                // placeholder="Zip Code"
                                // onUpdate={setZipcode}
                                // error={showError('zipcode')}
                            />
                      
                    </div>

                    <div className="mb-4">
                      
                            <TextInput 
                                className="w-full mt-2"
                                // string={city}
                                // placeholder="City"
                                // onUpdate={setCity}
                                // error={showError('city')}
                            />
                      
                    </div>

                    <div>
                       
                            <TextInput 
                                className="w-full mt-2"
                                // string={country}
                                // placeholder="Country"
                                // onUpdate={setCountry}
                                // error={showError('country')}
                            />
                       
                    </div>

                    <button 
                        type="submit"
                        // disabled={isUpdatingAddress}
                        className={"mt-6 w-full bg-blue-500 text-white text-lg font-semibold p-3  rounded"}
                    >
                       Update Adress
                    </button>

                </form>
            </div>
        </div>
    </Mainlayout>
</>
  )
}
