# วิธีการทำงาน อ่านด้วยนะครับ :>
---

1 . Clone Git หรือใช้ Github Desktop ก็ได้

```bash
git clone  https://github.com/MeowmeowGangster/FlashCardFrontend.git
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

4 . Run Project

```bash
npm run dev หรือ yarn dev
```

5 . เข้าไปที่ <http://localhost:3000>

6 . ทำงานใน Branch ที่สร้างไว้

7 . เมื่อเสร็จแล้ว ให้ Commit และ Push ไปที่ Branch ที่สร้างไว้

```bash
git add .   
git commit -m "เขียนอะไรก็ได้ แต่ต้องเขียนเป็นภาษาอังกฤษ ให้เข้าใจง่าย ว่าทำอะไรไปบ้าง"   
git push origin ชื่อ/feature

เช่น git push origin porpyyy_/feature-card
```
