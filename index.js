var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var apiUrl = "https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1";
var receiptProgram = /** @class */ (function () {
    function receiptProgram(apiUrl) {
        this.url = apiUrl;
    }
    receiptProgram.prototype.fetchProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, proudcts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.url)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        proudcts = _a.sent();
                        return [2 /*return*/, proudcts];
                }
            });
        });
    };
    receiptProgram.prototype.printGroupResult = function (products) {
        products.sort(function (a, b) { return a.name.localeCompare(b.name); });
        products.forEach(function (product) {
            console.log("... ".concat(product.name));
            console.log("    Price: $".concat(product.price.toFixed(1)));
            console.log("    ".concat(product.description.substring(0, 10), "..."));
            console.log("    Weight: ".concat(product.weight ? product.weight : "N/A"));
        });
    };
    receiptProgram.prototype.calculateTotal = function (products) {
        return products.reduce(function (total, product) { return total + product.price; }, 0);
    };
    receiptProgram.prototype.printResult = function (products) {
        var domesticProducts = products.filter(function (product) { return product.domestic; });
        var importedProducts = products.filter(function (product) { return !product.domestic; });
        console.log(". Domestic");
        this.printGroupResult(domesticProducts);
        console.log(". Imported");
        this.printGroupResult(importedProducts);
        console.log("Domestic cost: $".concat(this.calculateTotal(domesticProducts).toFixed(1)));
        console.log("Imported cost: $".concat(this.calculateTotal(importedProducts).toFixed(1)));
        console.log("Domestic count: ".concat(domesticProducts.length));
        console.log("Imported count: ".concat(importedProducts.length));
    };
    return receiptProgram;
}());
(function () { return __awaiter(_this, void 0, void 0, function () {
    var program, products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                program = new receiptProgram(apiUrl);
                return [4 /*yield*/, program.fetchProducts()];
            case 1:
                products = _a.sent();
                program.printResult(products);
                return [2 /*return*/];
        }
    });
}); })();
