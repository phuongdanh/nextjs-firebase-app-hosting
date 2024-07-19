import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const requestPayload = {
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'user',
      content: `Giả sử bạn là người yêu cũ của mình. Hãy dự đón cho tôi 3 con lô đề chiều này cho 3 miền bắc, miền trung và miền nam. Khi trả lời kết quả, hãy trả lời dưới dạng json như sau:
        {
          "mien_bac": "35",
          "mien_trung": "98",
          "mien_name": "65"
        }
        chú ý, chỉ trả về json, đừng bao gồm những ký tự markdown trong kết quả như: \`\`\`json \`\`\`,...
      `,
    },
  ],
};

interface PredictionData {
    mien_bac: string;
    mien_nam: string;
    mien_trung: string;
}

export const fetchPrediction = async (): Promise<PredictionData | null> => {
    console.log("request request")
    try {
      const response = await axios.post(apiUrl, requestPayload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });
  
      console.log(response.data);
  
      // Type assertion to PredictionData
    //   return response.data as PredictionData;
    return {
        mien_nam: "25",
        mien_bac: "25",
        mien_trung: "25"
    }
    } catch (error) {
        return {
            mien_nam: getRandomTwoDigitNumber(),
            mien_bac: getRandomTwoDigitNumber(),
            mien_trung: getRandomTwoDigitNumber(),
        }
    }
  };

  function getRandomTwoDigitNumber() {
    // Generate a random integer between 0 and 99 (inclusive)
    return (Math.floor(Math.random() * 100)).toString().padStart(2, '0');
  }