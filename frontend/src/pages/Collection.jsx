import React, { use, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = React.useState(false);
  const [filterProducts, setFilterProducts] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [sortType, setSortType] = React.useState('relevant');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    setFilterProducts(productsCopy);
  }

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    sortProducts();
  } , [sortType]);

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, []);

  useEffect(() => {
    applyFilter();
  }, [category,search,showSearch, products]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*Phần dùng để lọc tìm kiếm*/}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">BỘ LỌC
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}/>
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium main-text">LOẠI</p>
          <div className="flex flex-col gap-2 text-sm font-light main-text">
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'BanhKem'} onChange={toggleCategory} /> Bánh Kem
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'BanhBao'} onChange={toggleCategory} /> Bánh Bao
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'BanhMi'} onChange={toggleCategory} /> Bánh Mì
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'BanhMan'} onChange={toggleCategory} /> Bánh Mặn
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'BanhNgot'} onChange={toggleCategory} /> Bánh Ngọt
            </p>
          </div>
        </div>
      </div>

      {/*Phần hiển thị sản phẩm*/}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'TẤT CẢ'} text2={'MẪU BÁNH'} />
          {/*Sắp xếp sản phẩm*/}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 rounded-md px-2 text-sm">
            <option value="relevant">Mặc định</option>
            <option value="low-high">Giá: Thấp đến Cao</option>
            <option value="high-low">Giá: Cao đến Thấp</option>
          </select>
        </div>

        {/*Sản phẩm*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item,index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Collection