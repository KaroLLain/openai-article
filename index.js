const axios = require('axios');
const fs = require('fs');

const fileUrl = 'https://cdn.oxido.pl/hr/Zadanie%20dla%20JJunior%20AI%20Developera%20-%20tresc%20artykulu.txt';

async function downloadFile(url, outputPath) {
const response = await axios.get(url, { responseType: 'stream' });
const writer = fs.createWriteStream(outputPath);
response.data.pipe(writer);
return new Promise((resolve, reject) => {
writer.on('finish', resolve);
writer.on('error', reject);
});
}

async function processArticle(article) {
const apiKey = 'OPEN__AI_KEY';
try {
const response = await axios.post(
'https://api.openai.com/v1/chat/completions',
{
model: 'gpt-3.5-turbo',
messages: [
{ role: 'system', content: 'You are a helpful assistant.' },
{ role: 'user', content: `Przekształć poniższy artykuł na kod HTML z odpowiednimi tagami i miejscami na grafiki:\n\n${article}` }
],
max_tokens: 2048,
temperature: 0.7
},
{
headers: {
'Content-Type': 'application/json',
Authorization: `Bearer ${apiKey}`
}
}
);

const htmlContent = response.data.choices[0].message.content;

fs.writeFileSync('artykul.html', htmlContent);
console.log('Artykuł został przetworzony i zapisany jako artykul.html');
} catch (error) {
console.error('Błąd podczas przetwarzania artykułu:', error.response ? error.response.data : error.message);
}
}

async function main() {
const filePath = 'article.txt';
await downloadFile(fileUrl, filePath);
const article = fs.readFileSync(filePath, 'utf8');
await processArticle(article);
}

main();