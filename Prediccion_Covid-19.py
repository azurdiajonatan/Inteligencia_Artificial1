
from sklearn.linear_model import LinearRegression  
from sklearn.preprocessing import PolynomialFeatures 
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# data 
# Datos tomados desde el 22/1/2020 hasta el 29/12/2021
x = np.asarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])[:,np.newaxis]
y = np.asarray([0,0,38,599,5087,18096,49789,74074,91746,107939,122062,138012,159504,174542,193834,227671,254417,293583,368484,470277,560315,601572,617984,626675])[:,np.newaxis]

# regression transform
poly_degree = 3
polynomial_features = PolynomialFeatures(degree = poly_degree)
x_transform = polynomial_features.fit_transform(x)

# fit the model
model = LinearRegression().fit(x_transform, y)
y_new = model.predict(x_transform)

# calculate rmse and r2
rmse = np.sqrt(mean_squared_error(y, y_new))
r2 = r2_score(y, y_new)
print('RMSE: ', rmse)
print('R2: ', r2)

# prediction
x_new_min = 0.0
x_new_max = 23.0

x_new = np.linspace(x_new_min, x_new_max, 23)
x_new = x_new[:,np.newaxis]

x_new_transform = polynomial_features.fit_transform(x_new)
y_new = model.predict(x_new_transform)

# plot the prediction
plt.plot(x_new, y_new, color='RED', linewidth=4)
plt.scatter(x,y)
plt.grid()
plt.xlim(x_new_min,x_new_max)
plt.ylim(0,1000000)
title = 'Degree = {}; RMSE = {}; R2 = {}'.format(poly_degree, round(rmse,2), round(r2,2))
plt.title("Prediction of Infection of Covid-19 in Guatemala\n " + title, fontsize=10)
plt.xlabel('x')
plt.ylabel('y')
plt.show()
