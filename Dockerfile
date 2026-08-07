FROM mcr.microsoft.com/playwright:v1.62.1-jammy

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx playwright install --with-deps

ENV CI=true

CMD ["npm", "run", "test"]
