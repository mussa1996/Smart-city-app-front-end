import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import ScriptLoader from 'react-async-script-loader';
function Address(isScriptLoaded,isScriptLoadSucceed) {
    const [address, setAddress] = React.useState('');
    if (isScriptLoaded&&isScriptLoadSucceed) {
        return (
            <div>
                <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={setAddress}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search address ...',
                                    className: 'location-search-input',
                                })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
            </div>
        );
    }

}

export default ScriptLoader([`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`])(Address) 
