const mongoose = require('mongoose');
// 定義使用者的資料庫模型（User Model）
const RoomSchema = new mongoose.Schema({
    MasterName: {
        type: String,
        required: true
    },
    RoomName: {
        type: String,
        required: true
    },
    RoomCode: {
        type: String,
        required: true
    },
    Menber: [{
        type: String
    }]
}, {
    timestamps: true // 自動添加 createdAt 和 updatedAt 欄位
});

// 將 UserSchema 轉為 User Model
module.exports = mongoose.model('Room', RoomSchema);