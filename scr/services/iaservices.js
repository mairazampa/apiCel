const BASE_URL = "https://tnt2023.panaltesting.com.ar";

const sendQuestionToChatbot = async (message) => {
     const response = await fetch(`${BASE_URL}/chat?question=${message}`);
     return await response.json();
   };
   
   const sendImageToChatbot = async (imageUri) => {
    console.log("lo que le llega a sendImage", imageUri)
    
    let formData = new FormData();
     formData.append("image", {
       uri: imageUri,
       name: "image.jpg",
       type: "image/jpg",
     });
     const response = await fetch(`${BASE_URL}/image`, {
       method: "POST",
       body: formData,
     });
     const blob = await response.blob();
     return new Promise((resolve, reject) => {
       const reader = new FileReader();
       reader.readAsDataURL(blob);
       reader.onloadend = () => {
         const base64String = reader.result;
         resolve(base64String);
       };
     });
   };
   
   export { sendQuestionToChatbot, sendImageToChatbot };