"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uri = 'mongodb+srv://jeremyagnz:LRB1L7sykZfJSMIl@lns-db.8rcnq13.mongodb.net/lnsdb';
        yield mongoose_1.default.connect(uri);
        yield mongoose_1.default.connection.syncIndexes();
        console.log('🛢️  Connected to DB and Collections Synchronized');
    }
    catch (error) {
        console.log(`❌ DB CONNECTION ERROR: ${error}`);
    }
});
exports.default = connectToDatabase;