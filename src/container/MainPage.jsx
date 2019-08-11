import React, {useState} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Select } from 'antd';

const { Meta } = Card;
const { Option } = Select;

const MainPage = ({ movies, genres }) => {
    const [filterMovies, setFilterMovies] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");
    const getFilterMovies = (valueInput, valueSelect) => {
        return movies.reduce((acc, item) => {
            const hasValue = valueInput && valueSelect;
            const hasGenre = item.genre && item.genre.length && item.genre.some(elem => elem.trim() === valueSelect);
            const hasTitle = item.title.toLowerCase().includes(valueInput.toLowerCase());
            if(hasValue && hasGenre && hasTitle){
                acc.push(item);
            }else if (valueInput && !valueSelect && hasTitle){
                acc.push(item);
            }else if(!valueInput && valueSelect && hasGenre){
                acc.push(item);
            }
            return acc;
        }, []);

    }
    console.log(filterMovies);
    const handleChangeInput = (e) => {
        const {value} = e.target;
        console.log(value, valueSelect);
        setValueInput(value);
        setFilterMovies(getFilterMovies(value, valueSelect));
    }
    const handleChangeSelect = (value) => {
        console.log(valueInput, value);
        setValueSelect(value);
        setFilterMovies(getFilterMovies(valueInput, value));
    }
    return (
        <div className="row-list-movies">
            <div className="hold-input">
                <Select onChange={handleChangeSelect} allowClear>
                    {
                        genres.map((item, i) => (<Option key={i} value={item}>{item}</Option>))
                    }
                </Select>
                <input type="text" name="filter-name" onChange={handleChangeInput} value={valueInput} />
            </div>
            {
                filterMovies.length ? filterMovies.map(item => (
                    <div key={item.id} className="card-movie">
                        <Link to={"/movie/" + item._id} >
                            <Card
                                hoverable
                                cover={<img alt="example" src={item.poster}/>}
                            >
                                <Meta title={item.title}/>
                            </Card>
                        </Link>
                    </div>
                )) : movies.map(item => (
                    <div key={item.id} className="card-movie">
                        <Link to={"/movie/" + item._id} >
                            <Card
                                hoverable
                                cover={<img alt="example" src={item.poster}/>}
                            >
                                <Meta title={item.title}/>
                            </Card>
                        </Link>
                    </div>
                ))
            }
        </div>

    );
};

const mapStateToProps = (state) => ({
    movies: state.data.movies,
    genres: state.data.genres
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);