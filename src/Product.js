import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button, Tooltip, Divider } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles({
  h2: {
    color: "#18378B",
  },
  list: {
    paddingLeft: "40px",
    paddingTop: "25px",
    display: "inline-block",
    width: "177px",
    overflowWrap: "break-word",
  },
  list2: {
    paddingTop: "25px",
    display: "inline-block",
    width: "85px",
    overflowWrap: "break-word",
  },
  list3: {
    cursor: "pointer"
  },
  total: {
    paddingLeft: "40px",
    paddingTop: "25px",
    display: "inline-block",
    width: "177px"
  },
  clear: {
    marginLeft: "144px",
    marginTop: "18px",
  },
  itemNamee: {
    width: "auto",
    paddingTop: "43px",
    paddingLeft: "20px",
    paddingBottom: "35px",
  },
  itemPricee: {
    width: "auto",
    paddingLeft: "20px",
    paddingTop: "12px"
  },
  itemContainer: {
    marginTop: "44px",
    marginLeft: "50px",
  }
})

function Product({ itemsFromApp }) {
  const classes = useStyles();
  const [stockItems, setStockItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [totalVisible, setTotalVisible] = useState(false)

  useEffect(() => {
    setStockItems(itemsFromApp)
  }, []);

  function addItemsToCart(i) {
    let newItem = { cartItemName: i.itemName, cartItemPrice: i.itemPrice };
    let newArray = cartItems.concat(newItem);
    setCartItems(newArray);
    setTotalVisible(true)
  }

  function sum(cart) {
    const total = cart.reduce(
      (prevValue, currentValue) => parseInt(prevValue) + parseInt(currentValue.cartItemPrice),
      0
    );
    return total;
  }

  function renderItems() {
    return (
      <Grid container className={classes.itemContainer}>
        {stockItems.map((i) =>
          <Box
            key={i}
            onClick={() => addItemsToCart(i)}
            sx={{
              cursor: "pointer",
              margin: "10px",
              width: 150,
              color: "#18378B",
              height: 150,
              border: "2px solid lightblue",
              borderRadius: 20,
              '&:hover': {
                backgroundColor: 'lightblue',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Tooltip title={i.itemName}>
              <Typography
                noWrap
                variant="subtitle2"
                className={classes.itemNamee}
              >
                {i.itemName}
              </Typography>
            </Tooltip>
            <Divider />
            <Tooltip title={i.itemPrice} >
              <Typography
                noWrap
                variant="body2"
                className={classes.itemPricee}
              >
                {i.itemPrice} Rs.
              </Typography>
            </Tooltip>
          </Box>
        )}
      </Grid>
    )
  }

  function toggleTotalPart() {
    setCartItems([])
    setTotalVisible(false)
  }

  function removeItem(item) {
    const newCartItemList = cartItems.filter(cartItem => cartItem !== item);
    setCartItems(newCartItemList);
  }

  function renderCart() {
    return (
      <Box
        sx={{
          width: 448,
          height: 500,
          border: "5px solid lightblue",
          borderRadius: 40,
          mt: 5,
          pt: 3,
          mr: 5,
          overflow: "auto",
          '&:hover': {
            backgroundColor: 'lightblue',
            opacity: [0.9, 0.8, 0.7],
          },
          "&::-webkit-scrollbar": {
            width: 5,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "black",
            marginTop: "40px",
            marginBottom: "40px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "grey",
          }
        }}
      >
        <Typography
          className={classes.h2}
          align="center"
          variant="h4">
          ORDER SUMMARY
        </Typography>
        {cartItems.map((item) => {
          return <React.Fragment>
            <Typography
              variant="subtitle1"
              className={classes.list}
            >
              {item.cartItemName}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.list2}
            >
              {item.cartItemPrice} Rs.
            </Typography>
            <DeleteIcon
              className={classes.list3}
              fontSize="small"
              onClick={() => removeItem(item)}
            >
            </DeleteIcon>
            <Divider />
          </React.Fragment>
        }
        )}
        {totalVisible &&
          <Grid>
            <Typography
              variant="h6"
              className={classes.total}
            >
              Total
            </Typography>
            <Typography
              variant="h6"
              className={classes.list2}
            >
              {sum(cartItems)}
            </Typography>
            <Grid className={classes.clear}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => toggleTotalPart()}
              >
                Clear all
              </Button>
            </Grid>
          </Grid>
        }
      </Box>
    )
  }

  return (
    <div style={{ display: "flex", height: "100%", width: "100%", marginTop: "66px" }}>
      {renderItems()}
      {renderCart()}
    </div>
  );
}

export default Product;
