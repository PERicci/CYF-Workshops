
// Retrieve the JSON object containing the UK address and phone number
const jsonObject = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  return data;
}

// Extract the address and phone number from the JSON object
const extractAddress = (api) => {
  const data = jsonObject(api);
  const address = data.address;
  return address
}
const extractPhoneNumber = (api) => {
  const data = jsonObject(api)
  const phoneNumber = data.phone;
  return phoneNumber
}

// Format the address in the UK address format
const formatAddress = (address) => {
  
};

// Format the phone number in the UK phone number format
const formatPhoneNumber = (phoneNumber) => { };

// Convert the formatted address and phone number into HTML format
const convertToHtml = (address, phoneNumber) => {
  const template = document
    .querySelector(templateSelector)
    .content.cloneNode(true);

  template.querySelector("#address").textContent = formatAddress(address);
  template.querySelector("#phone").textContent = formatPhoneNumber(phoneNumber);

  return template
};

// Display the formatted address and phone number as HTML on the web page
const render = (api, elementId) => {
  const address = extractAddress(api);
  const phone = extractPhoneNumber(api);

  const html = convertToHtml(address, phone);
  document.body.appendChild(html);
}