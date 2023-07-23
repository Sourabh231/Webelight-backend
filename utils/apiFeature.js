class ApiFeature {
    constructor(query,querystr){
        this.query = query;
        this.querystr = querystr;
    }
    search(){
        const keyword = this.querystr.keyword 
        ? {
            name:{
                $regex:this.querystr.keyword,
                $options:'i',
            },
        }:{}

        //console.log(keyword);

        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.querystr}
         //console.log(queryCopy)
        //Remove some field category
        const removefields = ["keyword","page","limit"];

        removefields.forEach((key)=>delete queryCopy[key]);

        //Filter for Price and Rating
       
        console.log(queryCopy);

        let querystr = JSON.stringify(queryCopy);
        querystr = querystr.replace(/\b(gt|gte|lt|lte)\b/g,key=>`$${key}`);
        //console.log(queryCopy);

        this.query = this.query.find(JSON.parse(querystr));
         
        //console.log(querystr)

        return this;
    }

    pagination(resultPerPage){
        const currentPage = Number(this.querystr.page) || 1; //50
        const skip = resultPerPage*(currentPage-1);

        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}

module.exports = ApiFeature;