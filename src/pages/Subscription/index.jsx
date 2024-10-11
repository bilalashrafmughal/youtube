import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import "./subscription.css"; // Import the CSS file for styling

const SubscriptionPlans = () => {
  const plans = [
    {
      title: "Standard Plan",
      price: "$49",
      priceId: "", // place your price id
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Pro Plan",
      price: "$249",
      priceId: "", // place your price id
      features: ["Feature A", "Feature B", "Feature C"],
    },
  ];

  const handlePayment = (priceId) => {
    if (window.Paddle) {
      Paddle.Checkout.open({
        items: [
          {
            priceId: priceId,
            quantity: 1,
          },
        ],
        customer: {
          email: "bilalashraf@gamil.com",
        },
      });
    }
  };

  const savePayment = (event) => {
    console.log("✅Completed Event:", event);
  };

  useEffect(() => {
    if (window.Paddle) {
      Paddle.Environment.set("sandbox");
      Paddle.Initialize({
        token: "", // place your token
        eventCallback: function (event) {
          console.log(event);
          if (event.name === "checkout.completed") {
            // savePayment
            savePayment(event);
          }
        },
      });
    }
  }, []);

  return (
    <div>
      <img src="/paddle-logo.png " />

      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item md={6} key={index}>
              <Card className="subscription-card">
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    {plan.price} / month
                  </Typography>
                  <Box component="ul" className="features-list">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <Typography>{feature}</Typography>
                      </li>
                    ))}
                  </Box>
                </CardContent>
                <Box sx={{ textAlign: "center", marginBottom: 2 }}>
                  <Button
                    onClick={() => handlePayment(plan.priceId)}
                    variant="contained"
                    color="primary"
                  >
                    Choose Plan
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default SubscriptionPlans;
