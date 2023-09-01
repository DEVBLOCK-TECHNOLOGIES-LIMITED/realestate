import React from "react";
import './css/addproperty.css'

function AddProperty (){
    return(
      <section className="width-80">
        <div className="add-property">
            <h1>Add Listing</h1>

            <form action="">
                <h3>Unit Information</h3>
                <div className="info">
                    <div>
                        <label htmlFor="">Unit name<span>*</span></label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Unit image<span>*</span></label>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="">Market Status<span>*</span></label>
                        <select name="" id="">
                            <option value="Available">Available</option>
                            <option value="Leased">Leased</option>
                            <option value="Sold">Sold</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Category<span>*</span></label>
                        <select name="" id="">
                            <option value="For Rent">For Rent</option>
                            <option value="For Sale">For Sale</option>
                            <option value="Short Let">Short Let</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Type<span>*</span></label>
                        <select name="" id="">
                            <option value="Flat">Flat</option>
                            <option value="House">House</option>
                            <option value="Land">Land</option>
                            <option value="Commercial Property">Commercial Property</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Subtype<span>*</span></label>
                        <select name="" id="">
                            <option value="Detached Bungalow">Detached Bungalow</option>
                            <option value="Detached Duplex">Detached Duplex</option>
                            <option value="Semi-detached Bungalow">Semi-detached Bungalow</option>
                            <option value="Semi-detached Duplex">Semi-detached Duplex</option>
                            <option value="Terraces Bungalow">Terraces Bungalow</option>
                            <option value="Terraced Duplex">Terraced Duplex</option>
                        </select>
                    </div>

                </div>
                
                <h3>Unit Location</h3>
                <div className="location">
                        <div>
                            <label htmlFor="">State<span>*</span></label>
                            <select name="state">
                                <option value="Abia">Abia</option>
                                <option value="Adamawa">Adamawa</option>
                                <option value="Akwa Ibom">Akwa Ibom</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Bauchi">Bauchi</option>
                                <option value="Benue">Benue</option>
                                <option value="Borno">Borno</option>
                                <option value="Bayelsa">Bayelsa</option>
                                <option value="Cross River">Cross River</option>
                                <option value="Delta">Delta</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Edo">Edo</option>
                                <option value="Ekiti">Ekiti</option>
                                <option value="Enugu">Enugu</option>
                                <option value="F.C.T">Federal Capital Territory (FCT)</option>
                                <option value="Gombe">Gombe</option>
                                <option value="Imo">Imo</option>
                                <option value="Jigawa">Jigawa</option>
                                <option value="Kaduna">Kaduna</option>
                                <option value="Kebbi">Kebbi</option>
                                <option value="Kano">Kano</option>
                                <option value="Kogi">Kogi</option>
                                <option value="Katsina">Katsina</option>
                                <option value="Kwara">Kwara</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Nassarawa">Nassarawa</option>
                                <option value="Niger">Niger</option>
                                <option value="Ogun">Ogun</option>
                                <option value="Ondo">Ondo</option>
                                <option value="Osun">Osun</option>
                                <option value="Oyo">Oyo</option>
                                <option value="Plateau">Plateau</option>
                                <option value="Rivers">Rivers</option>
                                <option value="Sokoto">Sokoto</option>
                                <option value="Taraba">Taraba</option>
                                <option value="Yobe">Yobe</option>
                                <option value="Zamfara">Zamfara</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="">City<span>*</span></label>
                            <select name="city">
                            </select>
                        </div>

                        <div>
                            <label htmlFor="" >Zip code<span>*</span></label>
                            <input type="number" maxLength='6'/>
                        </div>

                        <div>
                            <label htmlFor="">Street address<span>*</span></label>
                            <input type="text" placeholder="e.g. 25 Northwall Drive, Vales Estate"/>
                        </div>
                </div>
                
                <h3>Price</h3>
                <div className="price">
                    <div>
                        <label htmlFor="">Price<span>*</span></label>
                        <input type="number" maxLength='9'/>
                    </div>
                    
                    <div>
                        <label htmlFor="">Frequency<span>*</span></label>
                        <select name="" id="">
                            <option value="">per annum</option>
                            <option value="">monthly</option>
                        </select>
                    </div>
                </div>

                <h3>Additional Information</h3>
                <div className="add-info">
                    <div>
                        <label htmlFor="">Bedrooms<span>*</span></label>
                        <input type="number" maxLength='2' min='1'/>
                    </div>

                    <div>
                        <label htmlFor="">Toilets<span>*</span></label>
                        <input type="number" maxLength='2' min='1'/>
                    </div>

                    <div>
                        <label htmlFor="">Bathrooms<span>*</span></label>
                        <input type="number" maxLength='2' min='1'/>
                    </div>

                    <div>
                        <label htmlFor="">Parking<span>*</span></label>
                        <input type="number" maxLength='2'/>
                    </div>

                    <div>
                        <label htmlFor="">Total Area (sqm)<span>*</span></label>
                        <input type="number"/>
                    </div>

                    <div>
                        <label htmlFor="">Covered Area (sqm)<span>*</span></label>
                        <input type="number"/>
                    </div>

                    <div>
                        <label htmlFor="">YouTube Video Link<span></span></label>
                        <input type="text" placeholder="e.g. https://www.youtube.com/watch?"/>
                    </div>

                    
                    <div>
                        <label htmlFor="">Description<span>*</span></label>
                        <textarea name="" id="" >
                        </textarea>
                    </div>

                    <div>
                        <input type="checkbox"/>
                        <label htmlFor="">Furnished</label>
                    </div>

                    <div>
                        <input type="checkbox"/>
                        <label htmlFor="">Services</label>
                    </div>

                </div>
            </form>
        </div>

        <div className="rules">
            <h3>Rules for Listing Property</h3>
            <p>It is important that you read and understand the rules for listing on Marksmen. <a>Click here for more details</a></p>
        </div>
      </section>
    )
}

export default AddProperty