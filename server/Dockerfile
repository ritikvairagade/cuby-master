FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV MONGO_URL=mongodb+srv://ritik:ritik@cuby-master.dcm72.mongodb.net/cuby?retryWrites=true&w=majority

ENV GOOGLE_CLIENT_ID=614817302975-ir9jjibj5dfeiurf2a3akh33p278d3nj.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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

ENV AWS_S3_ACCESS_KEY=AKIA2LZMIKAUGCAEJRLB
ENV AWS_S3_SECRET_KEY=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

ENV RZR_PAY_ID=rzp_test_DKehz9YlquKuZK
ENV RZR_PAY_SECRET=dFaFcyCXbjNiHemI9ZwD7LTt



CMD ["npm", "run", "start"]