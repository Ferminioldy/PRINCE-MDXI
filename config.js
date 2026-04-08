const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VVXa+iSBT8L/2qGQTkQ5KbDCAKovgFKm7moYEGG4FGaFSc+N83eOfOTLLZ2bs8NYdOdZ06Vc13UBBcIxu1QPkOygpfIUXdkrYlAgrQmjhGFeiDCFIIFLA0No11sGZpvpPH7F1L/Ymzu57cvdtbaffj/CHZ0DNnw2pvvYFnH5RNkOHwD4CuuDBNzV8YuwHeH6ai7QSLS2lnCcMzZZPX8404caW1LiTyG3h2iBBXuEiM8oRyVMHMRu0K4upz9PVlGJjt5lbuHWwfkHFKW7u81OPlyDnZmu4ToQn3FpEG+eBz9MVcuN5sIm/GgsAOCLeYMBtnR906oBdqb9CQgb1qrDuHNnmnX+OkQJEVoYJi2n5e9/n0uoR3z3fT0UhAcG8dE3EyHIUyF+kpPtFq568Zd9w7Lz5HXMbZybgFZ3c9iG9N0TuNvHGrRnNnvLoYA3YZxAvdn9MxdOXfia+qD6+c/4/uZ6fVpIGjQZqXdCaJ7NGYqNppkxWr4bS4lta6NOXjeLIz/c/RvzzM9enoaUS60EOOx6qtX2cZttg84u2jcVRh2pMJY9XnwS/6kDbVn1h6aZxFp8PqMtmcp4JVanHU3Gd3U9/EW+o3lCxCq3AOps5JjHdht80gFLOzNFrP2iiC7mUS5HvRO/P+ijDZCh9qzouT29urozNqrQgo7LMPKpTgmlaQYlK8aiLfBzC6blFYIfqSF0hicBMdlnEhYdLFrDfU09zke0wQJtwSBXd3YpZp4a9mo/AN9EFZkRDVNYpMXFNStQtU1zBBNVD++tYHBbrT98F1x/FsH8S4qqlXNGVGYPQx1Y+PMAxJU9BtW4R6t0AVUAa/yohSXCR1p2NTwCo84SvST5DWQIlhVqOfHaIKRUChVYN+plYnUSe8dVRnAs+boA/y10BwBBTAcYIwHPIcxwuK8LX+cutAYVl+KRAFfZC9NrH8cCRwEi/J4kiWRorwtas/f9Lr0CJEIc7qLu+rhiN7dd2Gsf9IfN/AqmqraifZRzsfvnjXnS1zyB1IJBSwvJk3eHY4PEvrx7R29yOfGc6riSOJrHbs8vxPEKCA6OK6O0mqGjJJY9nykeeEXnGVl/Z8kOJ4M+T3knswL9kOUV+3aykIRH9EVlOukXeHaqmvR4KxCW7a1NmOI0/bUL/Q1bfutAhdcYh+P6zlZYvhjYCJG54kJyN96Fteq28ulzSRudDTh87Wk3M77XnRbmhbxsNtbE/Q5BbN1vstm00cxnOkQ6DdFtLGYwdXEuMfjn0lJvtxU+GXl7pBda8xRq/gF7Ab338N7p12567Bs/8bwo+L5F/CqEXwmNNMNNGRu4SaPC3HEcG+tLhXBnvdr3q6eHdRj673IQHP57c+KDNIY1LlQAGwiCqCI9AHFWk6u1pFTP70X1ATa7xOtl3fGayp+isCLs5RTWFeAoWVJEEcsoIgvO9aVaQ0YX0CCuDzjE23nZ9btSy3FNKPRAG1ewzHBc+/ARSPq2RtBwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
