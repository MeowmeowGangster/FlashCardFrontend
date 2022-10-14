# วิธีการทำงาน อ่านด้วยนะครับ :>
[![Flash Card App Deployment to Google Cloud Run](https://github.com/MeowmeowGangster/FlashCardFrontend/actions/workflows/deploy.yaml/badge.svg?branch=FLASHCARD-57-login-page)](https://github.com/MeowmeowGangster/FlashCardFrontend/actions/workflows/deploy.yaml)

1 . Clone Git หรือใช้ Github Desktop ก็ได้

```bash
git clone https://github.com/MeowmeowGangster/FlashCardFrontend.git
```

2 . สร้าง Branch ใหม่

```bash
git checkout -b ชื่อ/feature
เช่น git checkout -b porpyyy_/feature-card

```

3 . Install Package

```bash
npm install หรือ yarn
```

4 . สร้างไฟล์ `.env` ในโฟลเดอร์ root แล้วใส่ข้อมูลตาม `.env.example`
ให้มาขอ .env จากอาร์ม เพราะมีข้อมูลที่เป็นความลับอยู่  เดี๋ยวโดนโจมตี

5 . Run Project

```bash
npm run start:dev หรือ yarn start:dev
```

6 . เข้าไปที่ <http://localhost3000>

7 . เนื่องจาก Line Login ต้องใช้ https จึงต้องใช้ ngrok ในการทำ https ให้กับ localhost
เพื่อให้สร้าง Tunnel 

- 7.1 ติดตั้ง ngrok จาก ```bash brew install ngrok```
- 7.2 เข้าเว็บไซต์ <https://dashboard.ngrok.com/get-started/setup> แล้ว Login ด้วย Github
- 7.3 เลื่อนลงมาจะเจอข้อมูลในการตั้งค่า ให้มา step 2 
```bash
ngrok config authtoken [YOUR_AUTH_TOKEN] ก็อปโค้ด
```
```bash
    ngrok http 3000
```

8 . ให้ไปที่ <https://developers.line.biz/console/> แล้วเข้าไปที่ Channel ของเรา


8 . ทำงานใน Branch ที่สร้างไว้

9 . เมื่อเสร็จแล้ว ให้ Commit และ Push ไปที่ Branch ที่สร้างไว้

```bash
git add .   
git commit -m "เขียนอะไรก็ได้ แต่ต้องเขียนเป็นภาษาอังกฤษ ให้เข้าใจง่าย ว่าทำอะไรไปบ้าง"   
git push origin ชื่อ/feature

เช่น git push origin porpyyy_/feature-card
```

9 . ไปที่ Github แล้วกด Pull Request ขอ Merge ไปที่ Branch Develop
เลือก Reviewer ให้เป็นอาร์ม และเลือก Assignee ให้เป็นตัวเอง แล้วกด Create Pull Request
ไปทำอะไรอื่นก่อน อาร์มจะมา Review ให้ แล้วก็ Merge ให้
