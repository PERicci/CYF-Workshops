
// Retrieve the JSON object containing the UK address and phone number
const jsonObject = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  return data;
}

// Extract the address and phone number from the JSON object
const extractAddress = async (api) => {
  const data = await jsonObject(api);
  const address = await data.address;
  return address
}
const extractPhoneNumber = async (api) => {
  const data = await jsonObject(api)
  const phoneNumber = await data.phone;
  return phoneNumber
}

// Format the address in the UK address format
const formatAddress = (address) => {
  const formattedAddress = address.replace(/,/g, '\n');
  return formattedAddress
};

// Format the phone number in the UK phone number format
const formatPhoneNumber = (phoneNumber) => {
  const formattedPhoneNumber = phoneNumber.replace(/^\+44\s/, "(0)")
  return formattedPhoneNumber
};

// Convert the formatted address and phone number into HTML format
const convertToHtml = (address, phoneNumber, elementId) => {
  const template = document
    .querySelector(elementId)
    .content.cloneNode(true);

  template.querySelector("#address").textContent = formatAddress(address);
  template.querySelector("#phone").textContent = formatPhoneNumber(phoneNumber);

  return template
};

// Display the formatted address and phone number as HTML on the web page
const render = async (api, elementId) => {
  const address = await extractAddress(api);
  const phoneNumber = await extractPhoneNumber(api);

  const html = convertToHtml(address, phoneNumber, elementId);
  document.body.appendChild(html);
}

render("./data.json", "#contact-template")